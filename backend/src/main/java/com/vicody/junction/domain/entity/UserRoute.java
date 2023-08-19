package com.vicody.junction.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.List;

@Entity
@Getter
public class UserRoute extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "user_schedule_id")
    private UserSchedule userSchedule;

    @ElementCollection
    @CollectionTable(name = "user_route_waypoint", joinColumns = @JoinColumn(name = "user_route_id"))
    private List<String> waypoint;

    private String distance;
    private String estimatedTime;
}
