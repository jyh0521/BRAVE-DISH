package com.vicody.junction.presentation;

import com.vicody.junction.presentation.payload.UserRequest;
import com.vicody.junction.presentation.payload.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    /**
     * 시작 경로와 도착 경로를 받아서, 그 주변의 모든 dishes와 수거함 위치를 저장한다.
     */
    @PostMapping("/near-waypoint")
    public ResponseEntity setNearWaypoints(@RequestBody UserRequest.NearWayPoint nearWayPoint) {
        return ResponseEntity.noContent().build();
    }

    /**
     * 시작 위치와 도착 위치를 받아서, 그 주변의 모든 dishes와 수거함 위치를 받아온다.
     */
    @GetMapping("/near-waypoint")
    public ResponseEntity getNearWayPoint() {
        List<UserResponse.NearWayPoint.WayPoint> wayPoints = List.of(
                UserResponse.NearWayPoint.WayPoint.of(1L, 35.136404, 129.057754,
                "DESTINATION", 1, "ING"),
                UserResponse.NearWayPoint.WayPoint.of(2L, 35.133853, 129.057162,
                        "DISH", 1, "ING"
                ));
        UserResponse.NearWayPoint nearWayPoint = UserResponse.NearWayPoint.of(
                wayPoints, 5000, 10
        );
        return ResponseEntity.ok(nearWayPoint);
    }

    /**
     * 도전중인 챌린지
     */
    @GetMapping("/challenge/ongoing")
    public ResponseEntity getOngoingChallenge() {
        UserResponse.Challenge.Ongoing onGoing = UserResponse.Challenge.Ongoing.of("[도전 중] 매주 2회 수거 챌린지", 10, 5);
        return ResponseEntity.ok(onGoing);
    }

    /**
     * 챌린지 목록
     * @return
     */
    @GetMapping("/challenge")
    public ResponseEntity getChallenges() {
        UserResponse.Challenge challenge = UserResponse.Challenge.of(
                List.of(UserResponse.Challenge.Content.of(13L, "[도전 중] 매주 3회 수거 챌린지", 100, LocalDate.now().plusDays(10)),
                        UserResponse.Challenge.Content.of(15L, "[도전 중] 매주 4회 챌린지", 100, LocalDate.now().plusDays(10))
                )
        );
        return ResponseEntity.ok(challenge);
    }

    /**
     * 챌린지 상세 조회
     * @return
     */
    @GetMapping("/challenge/{id}")
    public ResponseEntity getChallenge(@PathVariable Long id) {
        UserResponse.Challenge.Detail detail = UserResponse.Challenge.Detail.of(
                13L, "[도전 중] 매주 3회 수거 챌린지", 100, 100, LocalDate.now().plusDays(10), "매주 3회 수거를 4주 동안 완료하면\n" +
                        "기존의 포인트보다 2배를 더 지급합니다");
        return ResponseEntity.ok(detail);
    }

    /**
     * 챌린지 참여
     * @param challenge
     * @return
     */
    @PostMapping("/challenge")
    public ResponseEntity joinChallenge(@RequestBody UserRequest.Challenge challenge) {
        return ResponseEntity.noContent().build();
    }
}
