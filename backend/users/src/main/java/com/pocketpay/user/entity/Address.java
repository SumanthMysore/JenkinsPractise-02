package com.pocketpay.user.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "address_line")
    private String address_line;

    @Column(name = "city")
    private String city;

    @Column(name = "postal_code")
    private String postal_code;

    @OneToOne(mappedBy = "address")
    private User user;
}
