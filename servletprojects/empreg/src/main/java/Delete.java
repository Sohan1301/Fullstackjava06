

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
 * Servlet implementation class Delete
 */
@WebServlet("/Delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
        super();
        // TODO Auto-generated constructor stub
    }

	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
		     response.setContentType("text/html");
		     PrintWriter out=response.getWriter();
		     String name=request.getParameter("uname");
		     Class.forName("com.mysql.cj.jdbc.Driver");
		     Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/excelrdb","root","root");
		     PreparedStatement ps=con.prepareStatement("delete from empreg where name=?");
		     ps.setString(1, name);
		     int i=ps.executeUpdate();
		     out.print(i+"sucessfully deleted");
		     con.close();
		     
		     
		     
		}
			catch(Exception ex){
				ex.printStackTrace();
			
		}

	}
	}


