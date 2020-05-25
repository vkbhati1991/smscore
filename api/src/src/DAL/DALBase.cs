using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace src.DAL
{
    public static class DALBase
    {
        public static string ExecuteProcedureReturnString(string connectionstring, string storedProcedure, params SqlParameter[] parameters)
        {
            string result = "";
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                using (SqlCommand command = conn.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = storedProcedure;

                    if (parameters != null)
                    {
                        command.Parameters.AddRange(parameters);
                    }

                    conn.Open();
                    var returnResult = command.ExecuteScalar();

                    if (returnResult != null)
                    {
                        result = Convert.ToString(returnResult);
                    }
                }
            }

            return result;
        }

        public static TData ExtecuteProcedureReturnData<TData>
            (
            string connectionstring,
            string storedProcedure,
            Func<SqlDataReader, TData> translater,
            params SqlParameter[] parameters
            )
        {
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                using (SqlCommand command = conn.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = storedProcedure;
                    if (parameters != null)
                    {
                        command.Parameters.AddRange(parameters);
                    }

                    conn.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    { 
                       TData elements;
                        try
                        {
                            elements = translater(reader);
                        }
                        finally
                        {
                            while (reader.NextResult())
                            { }
                        }

                        return elements;
                    }
                }
            }
        }


        public static string GetNullableString(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? null : Convert.ToString(reader[colName]);
        }

        public static int GetNullableInt32(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? 0 : Convert.ToInt32(reader[colName]);
        }

        public static bool GetBoolean(SqlDataReader reader, string colName)
        {
            return reader.IsDBNull(reader.GetOrdinal(colName)) ? default(bool) : Convert.ToBoolean(reader[colName]);
        }

        public static bool IsColoumnExist(this IDataRecord dataReader, string colName)
        {
            try
            {
                return dataReader.GetOrdinal(colName) >= 0;
            }
            catch
            {
                return false;
            }
        }
    }
}
