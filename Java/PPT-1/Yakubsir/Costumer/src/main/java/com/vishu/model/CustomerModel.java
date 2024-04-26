package com.vishu.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CustomerModel {
@Id
private Integer cid;
private String cname;
private Long mno;
private String pn;
private Double pc;
private Integer qua;
private Double total;
private Double discount;
private Double gst;
private Double bill;
public CustomerModel() {
	super();
	// TODO Auto-generated constructor stub
}
public Integer getCid() {
	return cid;
}
public void setCid(Integer cid) {
	this.cid = cid;
}
public String getCname() {
	return cname;
}
public void setCname(String cname) {
	this.cname = cname;
}
public Long getMno() {
	return mno;
}
public void setMno(Long mno) {
	this.mno = mno;
}
public String getPn() {
	return pn;
}
public void setPn(String pn) {
	this.pn = pn;
}
public Double getPc() {
	return pc;
}
public void setPc(Double pc) {
	this.pc = pc;
}
public Integer getQua() {
	return qua;
}
public void setQua(Integer qua) {
	this.qua = qua;
}
public Double getTotal() {
	return total;
}
public void setTotal(Double total) {
	this.total = total;
}
public Double getDiscount() {
	return discount;
}
public void setDiscount(Double discount) {
	this.discount = discount;
}
public Double getGst() {
	return gst;
}
public void setGst(Double gst) {
	this.gst = gst;
}
public Double getBill() {
	return bill;
}
public void setBill(Double bill) {
	this.bill = bill;
}
@Override
public String toString() {
	return "CustomerModel [cid=" + cid + ", cname=" + cname + ", mno=" + mno + ", pn=" + pn + ", pc=" + pc + ", qua="
			+ qua + ", total=" + total + ", discount=" + discount + ", gst=" + gst + ", bill=" + bill + ", getCid()="
			+ getCid() + ", getCname()=" + getCname() + ", getMno()=" + getMno() + ", getPn()=" + getPn() + ", getPc()="
			+ getPc() + ", getQua()=" + getQua() + ", getTotal()=" + getTotal() + ", getDiscount()=" + getDiscount()
			+ ", getGst()=" + getGst() + ", getBill()=" + getBill() + ", getClass()=" + getClass() + ", hashCode()="
			+ hashCode() + ", toString()=" + super.toString() + "]";
}


}
