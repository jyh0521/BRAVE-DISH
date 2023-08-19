package com.vicody.junction.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Getter
public class Dish extends Auditable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Integer priorityLevel;

    @Column
    private Double latitude;

    @Column
    private Double longitude;
}
