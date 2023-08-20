package com.vicody.junction.presentation.payload;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class KeeperRequest {

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class Collect {
        private Long userRouteId;
        private LocalDateTime completeAt;

        public static KeeperRequest.Collect of(Long userRouteId, LocalDateTime completeAt) {
            return KeeperRequest.Collect.builder()
                    .userRouteId(userRouteId)
                    .completeAt(completeAt)
                    .build();
        }
    }
}
