<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<h1>view all</h1>
<table border="1">
 <tr>   
<th>CID</th>    
<th>CNAME</th> 
<th>MOBILE</th> 
<th>PNAME</th> 
<th>PRICE</th> 
<th>QUANTITY</th> 
<th>TOTAL</th> 
<th>DISCOUNT</th>
<th>GST</th>
<th>INVOICEBILL</th> 
<th>DELETE</th>
<th>EDIT</th> 
</tr>
<tr>
    <c:forEach var="cust" items="${cust1}">
    <td>${cust.cid}</td>
    <td>${cust.cname}</td>
    <td>${cust.mno}</td>       
    <td>${cust.pn}</td>
    <td>${cust.pc}</td>  
    <td>${cust.qua}</td> 
    <td>${cust.total}</td>  
    <td>${cust.discount}</td>  
    <td>${cust.gst}</td> 
    <td>${cust.bill}</td> 
    <td><a href="/delete/${cust.cid}">delete</a></td>  
    <td><a href="/edit/${cust.cid}">edit</a></td>  
</tr>  
    </c:forEach>
</tr>
</table>
<a href="/addcust">Add Customer</a>&nbsp;&nbsp;&nbsp;&nbsp;