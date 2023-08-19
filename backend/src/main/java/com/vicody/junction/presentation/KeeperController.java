package com.vicody.junction.presentation;

import com.vicody.junction.presentation.payload.KeeperRequest;
import com.vicody.junction.presentation.payload.KeeperResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/keeper")
@RequiredArgsConstructor
public class KeeperController {

    /**
     * 현재 접속중인 전체 키퍼 인원수 조회
     * @return
     */
    @GetMapping("/online-count")
    public ResponseEntity getOnlineCount() {
        return ResponseEntity.ok(KeeperResponse.OnlineCount.of(10));
    }

    /**
     * 수거 완료
     * @return
     */
    @PatchMapping("/collect")
    public ResponseEntity updateCollect(@RequestBody KeeperRequest.Collect collect) {
        KeeperResponse.Collect collectResponse = KeeperResponse.Collect.of(1L, 3, "코팅된 종이컵", 3);
        return ResponseEntity.ok(collectResponse);
    }

    /**
     * 수거 취소
     * @return
     */
    @DeleteMapping("/collect")
    public ResponseEntity deleteCollect(@RequestBody KeeperRequest.Collect collect) {
        return ResponseEntity.noContent().build();
    }
}
