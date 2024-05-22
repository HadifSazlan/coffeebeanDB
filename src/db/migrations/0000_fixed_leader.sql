CREATE TABLE IF NOT EXISTS "bean_flavours" (
	"bean_id" integer NOT NULL,
	"flavour_id" integer NOT NULL,
	CONSTRAINT "bean_flavours_bean_id_flavour_id_pk" PRIMARY KEY("bean_id","flavour_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "beans" (
	"id" serial PRIMARY KEY NOT NULL,
	"roaster_id" integer,
	"supplier_id" integer,
	"name" varchar(70) NOT NULL,
	"slug" varchar(70) NOT NULL,
	"roast_profile" varchar(25),
	"brew_type" varchar(25),
	"origin" varchar(50),
	"process" varchar(50),
	"altitude" varchar(70),
	"link" varchar(250),
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone,
	CONSTRAINT "beans_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "flavours" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(70) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roasters" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(70) NOT NULL,
	"slug" varchar(70) NOT NULL,
	"email" varchar(50),
	"phone" varchar(20),
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "suppliers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(70) NOT NULL,
	"slug" varchar(70) NOT NULL,
	"email" varchar(50),
	"phone" varchar(20),
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(50) NOT NULL,
	"password" varchar(64) NOT NULL,
	"name" varchar(70),
	"phone" varchar(20),
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bean_flavours" ADD CONSTRAINT "bean_flavours_bean_id_beans_id_fk" FOREIGN KEY ("bean_id") REFERENCES "beans"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bean_flavours" ADD CONSTRAINT "bean_flavours_flavour_id_flavours_id_fk" FOREIGN KEY ("flavour_id") REFERENCES "flavours"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
