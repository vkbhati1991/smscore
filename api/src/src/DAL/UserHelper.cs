using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using src.BAL;
using src.DTOS;
using src.IDAL.IUser;
using src.Models.User;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace src.DAL
{
    public class UserHelper : IUser
    {
        string connectionstring = ConnectionString.CName;

		public string CreateUser(User user)
		{
			var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 20)
			{
				Direction = ParameterDirection.Output
			};

			SqlParameter[] param = {
				new SqlParameter("@UserId", user.UserId),
				new SqlParameter("@FirstName", user.FirstName),
				new SqlParameter("@LastName", user.LastName),
				new SqlParameter("@Email", user.Email),
				outParam
			};

			DALBase.ExecuteProcedureReturnString(connectionstring, "spAddUser", param);

			return (string)outParam.Value;
		}

		public string DeleteUser(User user)
		{
			var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 20)
			{
				Direction = ParameterDirection.Output
			};

			SqlParameter[] parms = {
				new SqlParameter("@UserId", user.UserId),
				outParam
			};

			DALBase.ExecuteProcedureReturnString(connectionstring, "spDeleteUser", parms);

			return (string)outParam.Value;
		}

		public List<User> GetAllUsers()
        {
			List<User> users = DALBase.ExtecuteProcedureReturnData<List<User>>(connectionstring, "spGetAllUsers", r => r.TranslateAsUserList());
			return users;
		}

		public User GetUserById(int UserId)
		{
			throw new NotImplementedException();
		}
	}
}
