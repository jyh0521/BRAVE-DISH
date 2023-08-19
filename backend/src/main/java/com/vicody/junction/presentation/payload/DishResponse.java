package com.vicody.junction.presentation.payload;

import lombok.*;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class DishResponse {

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class TotalCount {
        private Integer dishCount;

        public static DishResponse.TotalCount of(Integer dishCount) {
            return TotalCount.builder()
                    .dishCount(dishCount)
                    .build();
        }
    }
}
