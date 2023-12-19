package com.team1060.golf.golf.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.team1060.golf.golf.api.request.RegisterGolf;
import com.team1060.golf.golf.api.response.ViewGolf;
import com.team1060.golf.golf.entity.Golf;
import com.team1060.golf.golf.service.GolfService;

import lombok.RequiredArgsConstructor;

/*
 * {
    "golf_no": Long,
    "region": String,
    "name": String,
    "description": String,
    "holes": int,
    "pars": int,
    "landArea": int,
    "address": String,
    "contact": String,
    "fax": String
  }
 */

@RestController
@RequiredArgsConstructor
public class GolfApi {

	private final GolfService golfService;
	
	@GetMapping("/")
    public @ResponseBody String Hello(){
        return "backend";
    }
	
	// 골프장 조회 
	@GetMapping("/golf")
	public List<Golf> selectAll() {
		return golfService.selectAll();
	}
	
	// 골프장 등록 
	@PostMapping("/golf")
	public ResponseEntity<String> registerGolf(@RequestBody RegisterGolf request){
		try {
			golfService.Register(request);
			return ResponseEntity.ok("골프장 등록 성공");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("골프장 등록 실패" + e.getMessage());
		}
	}
	
}












