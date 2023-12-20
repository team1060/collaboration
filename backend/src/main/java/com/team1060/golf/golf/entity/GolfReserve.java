package com.team1060.golf.golf.entity;

import java.time.ZonedDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/*
 * 골프장 예약
 */

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class GolfReserve { 
	private Long reserve_no; // 예약 번호 
	private Long course_no; // 코스번호 
	private String email; // 이메일 
	private int golf_no; // 골프장 번호 
	private ZonedDateTime reserve_time; // 예약 완료시간 
	private ZonedDateTime time; // 예약시간 
	private ZonedDateTime date; // 예약날짜 
	private int golf_status; // 예약 상태 (0)완료, (1)취소
}
