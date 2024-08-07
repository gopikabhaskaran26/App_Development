package com.example.demo.Model;



import jakarta.persistence.*;

@Entity
public class Login {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY) // Ensure this is uncommented
    private Long id;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "pwd")
    private String password;

    // @OneToOne(mappedBy = "login", cascade = CascadeType.ALL, orphanRemoval = true)
    // private Register register;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // public Register getRegister() {
    //     return register;
    // }

    // public void setRegister(Register register) {
    //     this.register = register;
    // }

    // Default constructor
    public Login() {}

    // Parameterized constructor
    public Login(Long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}
