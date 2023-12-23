package com.team1060.golf.golf.api;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team1060.golf.golf.api.response.ViewCourse;
import com.team1060.golf.golf.api.response.ViewGolf;
import com.team1060.golf.golf.service.ReserveService;

import lombok.RequiredArgsConstructor;

/**
 * <pre>
 * 골프장 예약 api 
 * </pre>
 * @author KJY
 * @since 2023.12.23
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reserve")
public class GolfReserveApi {

	private final ReserveService reserveService;
	
//	@GetMapping("/reserve")
//	@CrossOrigin
//	public List<ViewCourse> selectGolfName(Long golf_no, LocalDate golf_date) {
//		return reserveService.getGolfNameList(golf_no, golf_date);
//	}
	
	// 코스 전체 조회
	@GetMapping("/course")
	@CrossOrigin
	public List<ViewCourse> selectAll() {
		return reserveService.selectAllCourse();
	}
}
