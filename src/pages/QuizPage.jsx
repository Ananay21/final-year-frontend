import Header from '../components/Header'
import Footer from '../components/Footer'
import QuizComponent from '../components/QuizComponent';
import { useEffect, useState } from 'react';

const QuizPage = () => {
  const [questions,setQuestions]=useState({});

  useEffect(()=>{
    getQuestions();
  },[]);

  const getQuestions=()=>{
    setQuestions(JSON.parse(`{
  "_id": {
    "$oid": "682772df05faff6cc16e311d"
  },
  "resourceId": "6827689d2944a255496a7c96",
  "quizzes": {
    "difficult": [
      {
        "text": "Which of the following commands is MOST efficient for recursively finding all files with the .txt extension within a deeply nested directory structure, and then displaying only their filenames without the paths?",
        "options": [
          "find . -name \\"*.txt\\" -print",
          "locate *.txt",
          "find . -name \\"*.txt\\" -print0 | xargs -0 -n1 basename",
          "grep -r \\".txt\\" ."
        ],
        "correctAnswer": "find . -name \\"*.txt\\" -print0 | xargs -0 -n1 basename"
      },
      {
        "text": "You are experiencing significant performance degradation on your Ubuntu system.  Which of the following tools would NOT directly help diagnose the issue at the kernel level?",
        "options": [
          "systemd-analyze blame",
          "top",
          "iostat",
          "lsof"
        ],
        "correctAnswer": "lsof"
      },
      {
        "text": "A user reports that they cannot access a shared directory mounted via NFS.  After verifying network connectivity, which command would provide the MOST informative diagnostics on the client side?",
        "options": [
          "df -h",
          "mount | grep nfs",
          "showmount -e <server_ip>",
          "nfsstat"
        ],
        "correctAnswer": "nfsstat"
      },
      {
        "text": "You need to create a new user account on Ubuntu that has restricted shell access, preventing them from using standard login commands like bash.  Which of the following commands achieves this, assuming the username is 'restricteduser'?",
        "options": [
          "adduser restricteduser --disabled-password",
          "useradd -m -s /bin/false restricteduser",
          "sudo usermod -s /bin/nologin restricteduser",
          "adduser restricteduser && passwd -l restricteduser"
        ],
        "correctAnswer": "useradd -m -s /bin/false restricteduser"
      }
    ],
    "medium": [
      {
        "text": "Which command is used in Ubuntu (and other Linux distributions) to update the system's package list?",
        "options": [
          "apt update",
          "yum update",
          "pacman -Syu",
          "dnf update"
        ],
        "correctAnswer": "apt update"
      },
      {
        "text": "What does the acronym 'GUI' stand for in the context of operating systems like Ubuntu?",
        "options": [
          "Graphical User Interface",
          "Generic User Input",
          "Global Utility Interface",
          "Graphic User Interaction"
        ],
        "correctAnswer": "Graphical User Interface"
      },
      {
        "text": "Which of the following is NOT a common Linux filesystem?",
        "options": [
          "ext4",
          "NTFS",
          "Btrfs",
          "XFS"
        ],
        "correctAnswer": "NTFS"
      },
      {
        "text": "The command sudo in Ubuntu is primarily used for:",
        "options": [
          "Creating new users",
          "Managing network settings",
          "Executing commands with root privileges",
          "Installing software packages"
        ],
        "correctAnswer": "Executing commands with root privileges"
      }
    ],
    "easy": [
      {
        "text": "Which of the following is an open-source operating system?",
        "options": [
          "Windows 10",
          "macOS Monterey",
          "Ubuntu",
          "iOS 16"
        ],
        "correctAnswer": "Ubuntu"
      },
      {
        "text": "Ubuntu is a distribution of which operating system?",
        "options": [
          "macOS",
          "Windows",
          "Linux",
          "Android"
        ],
        "correctAnswer": "Linux"
      },
      {
        "text": "What command is commonly used in Linux/Ubuntu to list files and directories?",
        "options": [
          "dir",
          "ls",
          "list",
          "show"
        ],
        "correctAnswer": "ls"
      },
      {
        "text": "Which of these is a common package manager for Ubuntu?",
        "options": [
          "apt",
          "brew",
          "yum",
          "snap"
        ],
        "correctAnswer": "apt"
      }
    ]
  },
  "createdAt": {
    "$date": "2025-05-16T17:16:15.856Z"
  },
  "_class": "com.final_year_project.AI_service.model.Quiz"
}`))
  }


  return (
    <>
    <Header/>
    <div className='w-full h-screen mt-25 quiz'>
        <div className='h-3/4 rounded-xl flex flex-wrap justify-center items-center mx-10 '>
          <QuizComponent obj={questions}/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default QuizPage