package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Memo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int memoId;

	private String memoTitle;

	private String memoContents;

	private int viewCount;

	private Boolean publicFlg;

	private Boolean disableFlg;

	private String createDateTime;

	private String updateDateTime;

	private String createUserEmailAddress;

	private String createUser;

}
