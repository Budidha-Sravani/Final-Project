package com.axis.exception;

public class SupportException extends RuntimeException {
	String msg;

	public SupportException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

}
