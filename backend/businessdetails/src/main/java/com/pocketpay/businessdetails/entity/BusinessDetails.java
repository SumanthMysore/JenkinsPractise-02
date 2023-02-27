package com.pocketpay.businessdetails.entity;

import com.pocketpay.businessdetails.enums.Role;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="business_details")
public class BusinessDetails {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="registration_number")
    private String registrationNumber;

    @Column(name="name")
    private String name;

    @Column(name="role")
    @Enumerated(EnumType.STRING)
    private Role role;
}
