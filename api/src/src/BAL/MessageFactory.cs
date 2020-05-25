using src.DTOS;
using src.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace src.BAL
{
    public class MessageFactory
    {
        public MessageModel Success(int Id)
        {
            MessageModel message = new MessageModel();
            message.MessageIcon = "icon-success";
            message.MessageTitle = "Success!!";
            message.MessageType = MessageType.Success;
            if (Id == 0)
            {
                message.MessageDescription = "Record saved successfully";
            }
            else
            {
                message.MessageDescription = "Record updated successfully";
            }
            return message;
        }

        public MessageModel Warning(int Id, string Desc)
        {
            MessageModel message = new MessageModel();
            message.MessageIcon = "icon-warning";
            message.MessageTitle = "Warning!!";
            message.MessageType = MessageType.Warning;
            message.MessageDescription = Desc;

            return message;
        }

        public MessageModel DeleteMessage()
        {
            MessageModel message = new MessageModel();
            message.MessageIcon = "icon-success";
            message.MessageTitle = "Success!!";
            message.MessageType = MessageType.Success;
            message.MessageDescription = "Record Deleted Successfully";

            return message;
        }
    }
}
