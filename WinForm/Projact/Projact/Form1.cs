using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Projact
{
    public partial class Form1 : Form
    {

        Random num = new Random();
       
          List<string> randomNum = new List<string>()
        {
            "1","2","3","4","5","6","7","8","9",
         
        };
        
         List<string> randomWord = new List<string>()
        {
            "One","Two","Three","Four","Five","Six","Seven","Eight","Nine",

        };

   
        Label firstClick, secentClick;

    

        public Form1()
        {
            InitializeComponent();
            NumberRandom();
        }

        private void click(object sender, EventArgs e)
        {
          
            Label clickedLable = sender as Label;
            if(firstClick != null && secentClick != null)
            {
                return;
            }
            

            if (firstClick==null)
            {

                if (randomNum.Count.Equals(randomWord.Count))
                {
                    firstClick = clickedLable;
                    MessageBox.Show("asdas");

                }
                else
                    return;
         
                
            }

       
    





        }
        private void NumberRandom()
        {
            Label lable;
            int randomNumber;
            int randomWords;
            
            for (int i = 9; i <tableLayoutPanel1.Controls.Count; i++)
            {

                if (tableLayoutPanel1.Controls[i] is Label)
                
                    lable = (Label)tableLayoutPanel1.Controls[i];
                    else
                        continue;
                randomNumber = num.Next(0, randomNum.Count);
                lable.Text = randomNum[randomNumber];

                randomNum.RemoveAt(randomNumber);
            }


            for (int j = 0; j <= 8; j++)
            {

                if (tableLayoutPanel1.Controls[j] is Label)

                    lable = (Label)tableLayoutPanel1.Controls[j];
                else
                    continue;
                randomWords = num.Next(0, randomWord.Count);
                lable.Text = randomWord[randomWords];

                randomWord.RemoveAt(randomWords);
            }
        }
       

   
    }
}
