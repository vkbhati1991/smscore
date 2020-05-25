using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace src.DTOS
{
   public enum ErrorStatus
    {
        NotInitialized = -1,
        Success = 0,
        Fail = 1,
        EmailAlreadyExist = 2,
        InvalidData = 3,
        AccessDenied = 3,
        Update = 4,
    }

}
