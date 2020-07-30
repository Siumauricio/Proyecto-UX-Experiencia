using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Proyecto_UX_1.Models
{
    public partial class ProyectoUXContext : DbContext
    {
        public ProyectoUXContext()
        {
        }

        public ProyectoUXContext(DbContextOptions<ProyectoUXContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Administrador> Administrador { get; set; }
        public virtual DbSet<Chat> Chat { get; set; }
        public virtual DbSet<Clientes> Clientes { get; set; }
        public virtual DbSet<Mensajes> Mensajes { get; set; }
        public virtual DbSet<Menu> Menu { get; set; }
        public virtual DbSet<Ordenes> Ordenes { get; set; }
        public virtual DbSet<OrdenesProductos> OrdenesProductos { get; set; }
        public virtual DbSet<Productos> Productos { get; set; }
        public virtual DbSet<Reviews> Reviews { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=database-ux.cxgfeicra4jz.us-east-1.rds.amazonaws.com;Initial Catalog=Proyecto-UX;Persist Security Info=True;User ID=admin;Password=proyecto1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Administrador>(entity =>
            {
                entity.HasKey(e => e.IdAdministrador)
                    .HasName("Administrador_PK");

                entity.HasIndex(e => e.UsuariosIdUsuario)
                    .HasName("Administrador__IDX")
                    .IsUnique();

                entity.Property(e => e.IdAdministrador).HasColumnName("id_administrador");

                entity.Property(e => e.UsuariosIdUsuario).HasColumnName("Usuarios_id_usuario");

                entity.HasOne(d => d.UsuariosIdUsuarioNavigation)
                    .WithOne(p => p.Administrador)
                    .HasForeignKey<Administrador>(d => d.UsuariosIdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Administrador_Usuarios_FK");
            });

            modelBuilder.Entity<Chat>(entity =>
            {
                entity.HasKey(e => e.IdChat)
                    .HasName("Chat_PK");

                entity.Property(e => e.IdChat).HasColumnName("id_chat");

                entity.Property(e => e.AdministradorIdAdministrador).HasColumnName("Administrador_id_administrador");

                entity.Property(e => e.ClientesIdCliente).HasColumnName("Clientes_id_cliente");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.AdministradorIdAdministradorNavigation)
                    .WithMany(p => p.Chat)
                    .HasForeignKey(d => d.AdministradorIdAdministrador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Chat_Administrador_FK");

                entity.HasOne(d => d.ClientesIdClienteNavigation)
                    .WithMany(p => p.Chat)
                    .HasForeignKey(d => d.ClientesIdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Chat_Clientes_FK");
            });

            modelBuilder.Entity<Clientes>(entity =>
            {
                entity.HasKey(e => e.IdCliente)
                    .HasName("Clientes_PK");

                entity.HasIndex(e => e.UsuariosIdUsuario)
                    .HasName("Clientes__IDX")
                    .IsUnique();

                entity.Property(e => e.IdCliente).HasColumnName("id_cliente");

                entity.Property(e => e.Telefono)
                    .HasColumnName("telefono")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UsuariosIdUsuario).HasColumnName("Usuarios_id_usuario");

                entity.HasOne(d => d.UsuariosIdUsuarioNavigation)
                    .WithOne(p => p.Clientes)
                    .HasForeignKey<Clientes>(d => d.UsuariosIdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Clientes_Usuarios_FK");
            });

            modelBuilder.Entity<Mensajes>(entity =>
            {
                entity.HasKey(e => e.IdMensaje)
                    .HasName("Mensajes_PK");

                entity.Property(e => e.IdMensaje).HasColumnName("id_mensaje");

                entity.Property(e => e.ChatIdChat).HasColumnName("Chat_id_chat");

                entity.Property(e => e.FechaMensaje)
                    .HasColumnName("fecha_mensaje")
                    .HasColumnType("datetime");

                entity.Property(e => e.Mensaje)
                    .IsRequired()
                    .HasColumnName("mensaje")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.ChatIdChatNavigation)
                    .WithMany(p => p.Mensajes)
                    .HasForeignKey(d => d.ChatIdChat)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Mensajes_Chat_FK");
            });

            modelBuilder.Entity<Menu>(entity =>
            {
                entity.HasKey(e => e.IdMenu)
                    .HasName("Menu_PK");

                entity.Property(e => e.IdMenu).HasColumnName("id_menu");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("nombre")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Ordenes>(entity =>
            {
                entity.HasKey(e => e.IdOrden)
                    .HasName("Ordenes_PK");

                entity.Property(e => e.IdOrden).HasColumnName("id_orden");

                entity.Property(e => e.ClientesIdCliente).HasColumnName("Clientes_id_cliente");

                entity.Property(e => e.FechaOrden)
                    .HasColumnName("fecha_orden")
                    .HasColumnType("datetime");

                entity.Property(e => e.TotalOrden)
                    .HasColumnName("total_orden")
                    .HasColumnType("numeric(10, 2)");

                entity.HasOne(d => d.ClientesIdClienteNavigation)
                    .WithMany(p => p.Ordenes)
                    .HasForeignKey(d => d.ClientesIdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Ordenes_Clientes_FK");
            });

            modelBuilder.Entity<OrdenesProductos>(entity =>
            {
                entity.HasKey(e => new { e.OrdenesIdOrden, e.ProductosIdProducto })
                    .HasName("ordenes_productos_PK");

                entity.ToTable("ordenes_productos");

                entity.Property(e => e.OrdenesIdOrden).HasColumnName("Ordenes_id_orden");

                entity.Property(e => e.ProductosIdProducto).HasColumnName("Productos_id_producto");

                entity.HasOne(d => d.OrdenesIdOrdenNavigation)
                    .WithMany(p => p.OrdenesProductos)
                    .HasForeignKey(d => d.OrdenesIdOrden)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ordenes_productos_Ordenes_FK");

                entity.HasOne(d => d.ProductosIdProductoNavigation)
                    .WithMany(p => p.OrdenesProductos)
                    .HasForeignKey(d => d.ProductosIdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ordenes_productos_Productos_FK");
            });

            modelBuilder.Entity<Productos>(entity =>
            {
                entity.HasKey(e => e.IdProducto)
                    .HasName("Productos_PK");

                entity.Property(e => e.IdProducto).HasColumnName("id_producto");

                entity.Property(e => e.Descripcion)
                    .IsRequired()
                    .HasColumnName("descripcion")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.MenuIdMenu).HasColumnName("Menu_id_menu");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("nombre")
                    .HasMaxLength(70)
                    .IsUnicode(false);

                entity.Property(e => e.Precio)
                    .HasColumnName("precio")
                    .HasColumnType("numeric(10, 2)");

                entity.HasOne(d => d.MenuIdMenuNavigation)
                    .WithMany(p => p.Productos)
                    .HasForeignKey(d => d.MenuIdMenu)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Productos_Menu_FK");
            });

            modelBuilder.Entity<Reviews>(entity =>
            {
                entity.HasKey(e => e.IdReview)
                    .HasName("Reviews_PK");

                entity.Property(e => e.IdReview).HasColumnName("id_review");

                entity.Property(e => e.Fecha)
                    .HasColumnName("fecha")
                    .HasColumnType("datetime");

                entity.Property(e => e.Mensaje)
                    .IsRequired()
                    .HasColumnName("mensaje")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ProductosIdProducto).HasColumnName("Productos_id_producto");

                entity.Property(e => e.Valoracion).HasColumnName("valoracion");

                entity.HasOne(d => d.ProductosIdProductoNavigation)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.ProductosIdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Reviews_Productos_FK");
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("Usuarios_PK");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Contrasena).HasColumnName("contrasena");

                entity.Property(e => e.Correo)
                    .IsRequired()
                    .HasColumnName("correo")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasColumnName("nombre")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Rol).HasColumnName("rol");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
