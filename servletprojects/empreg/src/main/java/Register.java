

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Register
 */
@WebServlet("/Register")
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Register() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			
			response.setContentType("text/html");
			PrintWriter out=response.getWriter();
			try {
				String name=request.getParameter("name");
				String password=request.getParameter("password");
				String email=request.getParameter("email");
				String gender=request.getParameter("gender");
				long mobile=Long.parseLong(request.getParameter("mobile"));
				String state=request.getParameter("state");
				String country=request.getParameter("country");
				
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/excelrdb","root","root");
				PreparedStatement pst=con.prepareStatement("insert into empreg values(?,?,?,?,?,?,?)");
				pst.setString(1, name);
				pst.setString(2, password);
				pst.setString(3, email);
				pst.setString(4, gender);
				pst.setLong(5, mobile);
				pst.setString(6, state);
				pst.setString(7, country);
				
				
				int i =pst.executeUpdate();
				out.print(i+"registered sucessfully");
				
				
				
				
			}
			
			catch (Exception ex) {
				out.print(ex);
			}


		}
	}
