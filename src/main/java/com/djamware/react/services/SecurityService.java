package com.djamware.react.services;

public interface SecurityService {
    String findLoggedInUsername();

    void autologin(String username, String password);
}
