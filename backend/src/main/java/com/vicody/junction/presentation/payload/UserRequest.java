package com.vicody.junction.presentation.payload;

import com.vicody.junction.service.dto.UserDto;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class UserRequest {

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class NearWayPoint {
        private Double startLat;
        private Double startLng;
        private Double endLat;
        private Double endLng;

        public UserDto.NearWayPoint toServiceNearWayPoint() {
            return UserDto.NearWayPoint.of(
                    this.startLat,
                    this.startLng,
                    this.endLat,
                    this.endLng
            );
        }

        public static NearWayPoint of(Double startLat, Double startLng, Double endLat, Double endLng) {
            return NearWayPoint.builder()
                    .startLat(startLat)
                    .startLng(startLng)
                    .endLat(endLat)
                    .endLng(endLng)
                    .build();
        }
    }


    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class Challenge {
        private Long id;

        public static Challenge of(Long id) {
            return Challenge.builder()
                    .id(id)
                    .build();
        }

    }
}
