package com.vicody.junction.presentation;

import com.vicody.junction.presentation.payload.DishResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dish")
@RequiredArgsConstructor
public class DishController {

    /**
     * n곳의 그릇 수거
     * @return
     */
    @GetMapping("/total-count")
    public ResponseEntity getTotalCount() {
        return ResponseEntity.ok(DishResponse.TotalCount.of(10));
    }
}
