using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace src
{
    public class ConnectionString
    {
        private static string cName = "Data Source=VINODS-PDG\\SQLEXPRESS;  Initial Catalog = sms; User ID = sa; Password=abc123";

        public static string CName => cName;
    }
}
