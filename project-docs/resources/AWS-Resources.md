# AWS Resources

### Databases Instructions (from Bhagi)<br>
EC2 Ubuntu 18.04 LAMP Server Instructions<br>

#### Launch an Instance
1.	Log in at [https://www.awseducate.com/signin/SiteLogin](https://www.awseducate.com/signin/SiteLogin)
2.	Click My Classrooms
3.	In the Database Systems row, click Go to classroom
4.	Click Continue
5.	Click AWS Console
6.	Under All services, click EC2
7.	Click Launch Instance
8.	Find Ubuntu Server 18.04 LTS (HVM), SSD Volume Type and click Select
9.	Make sure t2.micro is selected
10.	On the top of the page, click 6. Configure Security Group
11.	Use the Add Rule button to add HTTP, HTTPS, and MYSQL/Aurora
12.	In the Source column, select Anywhere in all four rows
13.	Click Review and Launch
14.	Click Launch
15.	Select Create a new key pair
16.	Set the key pair name as your NetID
17.	Click Download Key Pair and save the .pem file somewhere safe like your Google Drive account<br>
    a. If your computer hard drive dies or you otherwise lose this file, you will lose access to your server!<br>
18.	Click Launch Instances
19.	Click View Instances
20.	After the Instance State for your new instance is running, select it
21.	In the Description tab below, copy the Public DNS (IPv4)

#### Install the LAMP Server
The following instructions assume you are using MobaXterm. If on a Mac, cd to the folder with your .pem file, run `chmod 700 filename.pem`, and then `ssh -i filename.pem ubuntu@<your-EC2-instance-public-DNS>`. Then skip to step 30.<br>
22.	Open MobaXterm<br>
23.	Click Session in the upper toolbar<br>
24.	Click SSH<br>
25.	Paste the Public DNS into the Remote host field<br>
26.	Click the Specify username checkbox and type ubuntu<br>
27.	Click Advanced SSH settings<br>
28.	Click the Use private key checkbox and use the file selector to select your .pem key pair file<br>
29.	Click OK<br>
30.	`sudo apt-get update`<br>
31.	`sudo apt install apache2`<br>
32.	Y to continue<br>
33.	`sudo apt install mysql-server`<br>
34.	Y to continue<br>
35.	`sudo apt install php-pear php-fpm php-dev php-zip php-curl php-xmlrpc php-gd php-mysql php-mbstring php-xml libapache2-mod-php`<br>
36.	Y to continue<br>
37.	`sudo systemctl restart apache2`<br>
38.	Go to your Public DNS in a web browser and verify that a page titled “Apache2 Ubuntu Default Page” loads<br>
39.	`php -r 'echo "\n\nYour PHP installation is working fine.\n\n\n";'`<br>
    a. Verify that “Your PHP installation is working fine” prints<br>
40.	`sudo a2enmod userdir`<br>
41.	`sudo vim /etc/apache2/mods-available/php7.2.conf`<br>
    a. Press I to insert<br>
42.	Comment out the bottom five lines as shown:<br>
```
# Running PHP scripts in user directories is disabled by default
#
# To re-enable PHP in user directories comment the following lines
# (from <IfModule ...> to </IfModule>.) Do NOT set it to On as it
# prevents .htaccess files from disabling it.
#<IfModule mod_userdir.c>
#    <Directory /home/*/public_html>
#        php_admin_flag engine Off
#    </Directory>
#</IfModule>
```
43.	Press ESC, then type :wq and enter to save and exit vim<br>
44.	You should now be able to access the <public DNS>/~ubuntu in a web browser<br>
45.	Create a directory called public_html using `mkdir public_html`<br>
46.	`sudo vim /etc/php/7.2/apache2/php.ini`<br>
    a. Go to line 474 by typing `:474 <enter>`<br>
    b. Press I to change to insert mode, and change “display_errors = Off” to “display_errors = On”<br>
47.	Press ESC, then type :wq and enter to save and exit vim<br>
48.	`sudo systemctl restart apache2`<br>

#### Add Your Git Repo
49.	Go to your team’s GitHub repo page and copy the Clone or Download link<br>
50.	cd to the public_html folder in /home/ubuntu<br>
51.	Clone the github repo in the public_html folder: `git clone <PASTE URL HERE>`<br>
52.	Enter your GitHub credentials if required<br>
53.	Verify your HTML or PHP files are in the folder<br>
54.	Go to <your-EC2-instance-public-DNS>/~ubuntu/<br>
    a. Verify your page/directory appears<br>

#### Set Up Your Database
55.	`sudo mysql`<br>
56.	`GRANT ALL PRIVILEGES ON *.* TO '<username>'@'localhost' IDENTIFIED BY 'seas';`<br>
57.	\q<br>
58.	`mysql -u <username> -p`<br>
59.	Enter password: seas<br>
60.	`CREATE DATABASE <dbname>;`<br>
61.	`use <dbname>`<br>
62.	`source <your-sql-script>`<br>

Before the end of the semester, be sure to terminate your instance from the AWS Console to avoid charges beyond the classroom credits!

To terminate the instance (and delete all the files on the server), select the instance on the “Instances” tab, click on “Actions” and hover over “Instance State” and click “Terminate”.
  
### Additional Networking Course Instructions for AWS (from Tim)
Found here: [https://gwadvnet20.github.io/c9/](https://gwadvnet20.github.io/c9/)
