using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using src.BAL;
using src.DAL;
using src.DTOS;
using src.IDAL.IUser;
using src.Models;
using src.Models.User;

namespace src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUser _user;

        public UsersController(IUser user)
        {
            _user = user;
        }

        [HttpGet]
        public ActionResult<List<User>> GetAllUsers()
        {
            List<User> users = _user.GetAllUsers();

            return Ok(users);
        }

        [HttpPost]
        public ActionResult CreateUser(User user)
        {
            string errorStatus = _user.CreateUser(user);
            Message message = new Message(errorStatus);

            return Ok(message.ErrorMessage(user.UserId));
        }

        public ActionResult DeleteUser(User user)
        {
            string errorStatus = _user.DeleteUser(user);
            Message message = new Message(errorStatus);
            return Ok(message.ErrorMessage(user.UserId));
        }

    }

}
