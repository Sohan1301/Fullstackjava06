

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SelectCode
 */
@WebServlet("/SelectCode")
public class SelectCode extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SelectCode() {
        super();
        // TODO Auto-generated constructor stub
    }

	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try
		{
			response.setContentType("text/html");
			PrintWriter out=response.getWriter();
		String name=request.getParameter("uname");
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/excelrdb","root","root");
		PreparedStatement ps=con.prepareStatement("select * from register where name=?");
		ps.setString(1,name);

		ResultSet rs=ps.executeQuery();
		ResultSetMetaData rss=rs.getMetaData();

		int n=rss.getColumnCount();  // n=5
out.print("<table border='1'>");
		for(int i=1;i<=n;i++)   //rss. 
			
			out.println("<td> <font color=blue size=3> "+"<br>"+rss.getColumnName(i));
			
			out.println("<tr>");
			
			while(rs.next())
			{
			for(int i=1;i<=n;i++)
				
			out.println("<td><br> "+rs.getString(i));
			out.println("<tr>");
			}
			out.println("</table>");
			
		}
		catch(Exception ex)
		{
			System.out.println(ex);
		}
	}

}
