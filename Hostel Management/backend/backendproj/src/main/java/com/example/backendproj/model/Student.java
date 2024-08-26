package com.example.backendproj.model;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String allotBed;
    private String mobile;
    private String email;
    private String dob;
    private String address1;
    private String address2;
    private String city;
    private String state;
    private String country;
    private String photo;
}