package com.djamware.react.repositories;

import com.djamware.react.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
    User findByUsername(String username);
}
