package com.example.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Models.User;
import com.example.Services.UserService;

import jakarta.validation.Valid;

@RestController

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/user/signup")
    public String signUp(@Valid @RequestBody User user) {
        return userService.signUp(user);
    }

    @PostMapping("/api/user/login")
    public String login(@RequestParam String email, @RequestParam String password) {
        return userService.login(email, password);
    }
}
