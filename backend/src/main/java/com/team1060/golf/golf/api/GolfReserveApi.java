package com.team1060.golf.golf.api;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team1060.golf.golf.api.request.RegisterAndModifyReserve;
import com.team1060.golf.golf.api.response.ViewCourse;
import com.team1060.golf.golf.api.response.ViewGolf;
import com.team1060.golf.golf.service.CourseService;
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
	
	
	// 코스 전체 조회
	@GetMapping("/course")
	@CrossOrigin
	public List<ViewCourse> selectAll() {
		return reserveService.selectAllCourse();
	}
	
	// 골프장 예약 신청 
	@PostMapping("/course")
	@CrossOrigin
	public ResponseEntity<String> reserveGolf(@RequestBody RegisterAndModifyReserve golf){
		try {
			reserveService.reserveGolf(golf);
			
			RegisterAndModifyReserve reserveData = RegisterAndModifyReserve.builder()
					.course_no(golf.getCourse_no())
					.course_name(golf.getCourse_name())
					.golf_no(golf.getGolf_no())
					.golf_date(golf.getGolf_date())
					.golf_time(golf.getGolf_time())
					.greenpee(golf.getGreenpee())
					.golf_status(0).build();
			reserveService.modifyCourse(reserveData);
			return ResponseEntity.ok(golf+"예약완료");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("골프장 등록 실패");
		}
	}
	
}
