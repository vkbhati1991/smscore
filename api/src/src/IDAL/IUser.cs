using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using src.Models.User;

namespace src.IDAL.IUser
{
    public interface IUser
    {
        List<User> GetAllUsers();
        string CreateUser(User user);
        User GetUserById(int UserId);

        string DeleteUser(User user);
    }
}
