package com.vicody.junction.presentation.payload;

import lombok.*;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class KeeperResponse {
    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class OnlineCount {
        private Integer keeperCount;

        public static OnlineCount of(Integer keeperCount) {
            return OnlineCount.builder()
                    .keeperCount(keeperCount)
                    .build();
        }
    }

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    public static class Collect {
        private Long monsterId;
        private Integer monsterLevel;
        private String monsterName;
        private Integer lastCount;

        public static Collect of(Long monsterId, Integer monsterLevel, String monsterName, Integer lastCount) {
            return Collect.builder()
                    .monsterId(monsterId)
                    .monsterLevel(monsterLevel)
                    .monsterName(monsterName)
                    .lastCount(lastCount)
                    .build();
        }
    }
}
