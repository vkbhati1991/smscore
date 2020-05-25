using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace src.DTOS
{

    [DataContract]
    public class MessageModel
    {
        public string MessageIcon { get; set; }
        public MessageType MessageType { get; set; }
        public string MessageTitle { get; set; }
        public string MessageDescription { get; set; }
    }
}
