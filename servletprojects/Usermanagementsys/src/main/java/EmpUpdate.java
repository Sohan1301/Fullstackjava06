

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
 * Servlet implementation class EmpUpdate
 */
@WebServlet("/EmpUpdate")
public class EmpUpdate extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EmpUpdate() {
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
		String name=request.getParameter("uname");
		String password=request.getParameter("pwd");
		String email=request.getParameter("email");
		
		String address=request.getParameter("address");
		
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/excelrdb","root","root");
			PreparedStatement pst=con.prepareStatement("update empreg set password=?,email=?,address=? where name=?");
			
			pst.setString(1,password);
			pst.setString(2, email);
			
			pst.setString(3, address);
			pst.setString(4, name);

			int i =pst.executeUpdate();
			out.print(i+"updated sucessfully");
			
			
			
			
		}
		
		catch (Exception ex) {
			out.print(ex);
		}


	}
	}


