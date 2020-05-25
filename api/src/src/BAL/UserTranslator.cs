using Microsoft.CodeAnalysis.CSharp.Syntax;
using src.DAL;
using src.Models.User;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace src.BAL
{
    public static class UserTranslator
    {
        public static User TranslateAsUser(this SqlDataReader reader, bool isList = false)
        {
            if (!isList)
            {
                if (!reader.HasRows)
                    return null;

                reader.Read();
            }

            User user = new User();

            if (reader.IsColoumnExist("UserId"))
                user.UserId = DALBase.GetNullableInt32(reader, "UserId");

            if (reader.IsColoumnExist("FirstName"))
                user.FirstName = DALBase.GetNullableString(reader, "FirstName");

            if (reader.IsColoumnExist("LastName"))
                user.LastName = DALBase.GetNullableString(reader, "LastName");

            if (reader.IsColoumnExist("Email"))
                user.Email = DALBase.GetNullableString(reader, "Email");

            return user;
        }

        public static List<User> TranslateAsUserList(this SqlDataReader reader)
        {
            List<User> userList = new List<User>();

            while (reader.Read())
            {
                userList.Add(TranslateAsUser(reader, true));
            }

            return userList;
        }
    }
}
