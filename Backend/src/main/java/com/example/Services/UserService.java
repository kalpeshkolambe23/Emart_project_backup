package com.example.Services;


import com.example.Models.User;

public interface UserService {
    String signUp(User user);

    String login(String email, String password);
}
