import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter, Navbar, NavbarBrand } from 'reactstrap';
import { SimpleShareButtons } from "react-simple-share";
import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['name', 'phone']

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchTerm: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  componentDidMount() {
    axios.get('/contacts')
      .then(res => {
        this.setState({ contacts: res.data });
        console.log(this.state.contacts);
      });
  }

  render() {
    const filteredEmails = this.state.contacts.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div class="container">
        <Navbar color="blue">
          <NavbarBrand href="#" className="mr-auto">Data WareHouse</NavbarBrand>
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          </Navbar>
        <div class="panel panel-default">
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Contact</Link></h4>
              <div class="card-deck">
                {filteredEmails.map(c =>
                  <div class="col-sm-6 col-md-6 col-lg-4">
                  <Card>
                    <Link to={`/edit/${c.id}`}>
                    <CardImg left width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    </Link>
                    <CardBody>
                      <table>
                        {Object.keys(c).map(s =>  s !== 'id' ?
                        <tr>
                          <td>{s.slice(0,1).toUpperCase() + s.slice(1, s.length) + ': '}</td>
                          <td className="value-td">{c[s]}</td>
                        </tr> : <tr />
                      )}
                      </table>
                    </CardBody>
                    <CardFooter className="text-center">
                      <SimpleShareButtons whitelist={["Facebook", "Twitter", "LinkedIn", "Google+", "Whatsapp"]} />
                    </CardFooter>
                  </Card>
                  </div>
                )}
            </div>
          </div>
        </div>

      </div>
    );
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default App;
