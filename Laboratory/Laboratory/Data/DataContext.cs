using Laboratory.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Laboratory.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {
        
        
        
        
        }
        public DbSet<User> Users { get; set; }

        public DbSet<DocumentType> DocumentTypes { get; set; }

    
    }
}
