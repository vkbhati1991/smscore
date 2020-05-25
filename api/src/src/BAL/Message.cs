using src.DTOS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace src.BAL
{
    public class Message
    {
        private readonly int statusCode;
        private readonly MessageFactory messageFactory;

        public Message(string statusCode)
        {
            this.statusCode = Convert.ToInt32(statusCode);
            messageFactory = new MessageFactory();
        }

        public MessageModel ErrorMessage(int Id, string Desc = "")
        {
            if (statusCode == 0)
            {
                return messageFactory.Success(Id);
            }
            else if (statusCode == 2)
            {
                return messageFactory.Warning(Id, "Email Id already exists");
            }
            else if (statusCode == 3)
            {
                return messageFactory.DeleteMessage();
            }

            return messageFactory.Warning(Id, "InValid Data");

        }

    }
}
