package com.vicody.junction.service.dto;

import lombok.*;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class UserDto {

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class NearWayPoint {
        private Double startLat;
        private Double startLng;
        private Double endLat;
        private Double endLng;

        public static NearWayPoint of(Double startLat, Double startLng,
                                      Double endLat, Double endLng) {
            return UserDto.NearWayPoint.builder()
                    .startLat(startLat)
                    .startLng(startLng)
                    .endLat(endLat)
                    .endLng(endLng)
                    .build();
        }
    }
}
