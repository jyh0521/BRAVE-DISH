package com.vicody.junction.presentation.payload;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class UserResponse {

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class NearWayPoint {
        private List<UserResponse.NearWayPoint.WayPoint> wayPoint;
        private Integer stepCount;
        private Integer point;

        public static UserResponse.NearWayPoint of(List<UserResponse.NearWayPoint.WayPoint> wayPoint, Integer stepCount, Integer point) {
            return NearWayPoint.builder()
                    .wayPoint(wayPoint)
                    .stepCount(stepCount)
                    .point(point)
                    .build();
        }

        @Getter
        @NoArgsConstructor(access = AccessLevel.PRIVATE)
        @AllArgsConstructor(access = AccessLevel.PRIVATE)
        @Builder(access = AccessLevel.PRIVATE)
        public static class WayPoint {
            private Long id;
            private Double latitude;
            private Double longitude;
            private String target; // todo - enum
            private Integer priorityLevel;
            private String progress; // todo - enum

            public static UserResponse.NearWayPoint.WayPoint of(Long id, Double latitude, Double longitude, String target, Integer priorityLevel, String progress) {
                return UserResponse.NearWayPoint.WayPoint.builder()
                        .id(id)
                        .latitude(latitude)
                        .longitude(longitude)
                        .target(target)
                        .priorityLevel(priorityLevel)
                        .progress(progress)
                        .build();
            }
        }
    }

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class Challenge {
        private List<Content> data;

        @Getter
        @NoArgsConstructor(access = AccessLevel.PRIVATE)
        @AllArgsConstructor(access = AccessLevel.PRIVATE)
        @Builder(access = AccessLevel.PRIVATE)
        public static class Content {
            private Long id;
            private String name;
            private Integer point;
            private LocalDate deadLine;

            public static Content of(Long id, String name, Integer point, LocalDate deadLine) {
                return Content.builder()
                        .id(id)
                        .name(name)
                        .point(point)
                        .deadLine(deadLine)
                        .build();
            }
        }

        public static Challenge of(List<Content> data) {
            return Challenge.builder()
                    .data(data)
                    .build()
                    ;
        }

        @Getter
        @NoArgsConstructor(access = AccessLevel.PRIVATE)
        @AllArgsConstructor(access = AccessLevel.PRIVATE)
        @Builder(access = AccessLevel.PRIVATE)
        public static class Ongoing {
            private String name;
            private Integer totalCount;
            private Integer completeCount;

            public static Ongoing of(String name, Integer totalCount, Integer completeCount) {
                return Ongoing.builder()
                        .name(name)
                        .totalCount(totalCount)
                        .completeCount(completeCount)
                        .build();
            }
        }

        @Getter
        @NoArgsConstructor(access = AccessLevel.PRIVATE)
        @AllArgsConstructor(access = AccessLevel.PRIVATE)
        @Builder(access = AccessLevel.PRIVATE)
        public static class Detail {
            private Long id;
            private String name;
            private Integer challengeUserCount; //몇 명이 참여하고 있는지
            private Integer point; //달성하면 얻게되는 포인트
            private LocalDate deadline;
            private String guide;

            public static Detail of(Long id, String name, Integer challengeUserCount, Integer point, LocalDate deadline, String guide) {
                return Detail.builder()
                        .id(id)
                        .name(name)
                        .challengeUserCount(challengeUserCount)
                        .point(point)
                        .deadline(deadline)
                        .guide(guide)
                        .build();
            }
        }
    }
}
