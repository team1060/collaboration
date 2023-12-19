package com.team1060.golf.golf.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.team1060.golf.golf.api.request.RegisterGolf;
import com.team1060.golf.golf.api.response.ViewGolf;
import com.team1060.golf.golf.entity.Golf;
import com.team1060.golf.golf.mapper.GolfMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GolfService {
	
	private final GolfMapper golfMapper;
	
	// 등록 
	public int Register(RegisterGolf request) {
		Golf golf = Golf.builder()
				.region(request.getRegion())
				.name(request.getName())
				.description(request.getDescription())
				.holes(request.getHoles())
				.pars(request.getPars())
				.land_area(request.getLand_area())
				.address(request.getAddress())
				.contact(request.getContact())
				.fax(request.getFax())
				.build();
		return golfMapper.insert(golf);
	}
	
	// 조회 
	public List<Golf> selectAll(){
		return golfMapper.getList();
	}
	
}
