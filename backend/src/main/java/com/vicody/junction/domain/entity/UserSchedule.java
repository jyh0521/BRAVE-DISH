package com.vicody.junction.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Getter
public class UserSchedule extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Double startLatitude;

    @Column
    private Double startLongitude;

    @Column
    private Double endLatitude;

    @Column
    private Double endLongitude;

    @ManyToOne
    private User user;
}
