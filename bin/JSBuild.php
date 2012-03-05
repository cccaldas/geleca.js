<?php

	/**
	* 
	*/
	class JSBuild
	{
		private $_files;
		private $_file;
		
		function __construct($file)
		{
			$this->_files 	= array();
			$this->_file 	= $file;
		}
		
		public function addFile($file) {
			array_push($this->_files, $file);
		}
		
		public function build($compress) {
			$build_content 	= "";
			
			foreach ($this->_files as $key => $file) {
				$build_content = $build_content.file_get_contents($file);
			}

			//build
			shell_exec("> ".$this->_file);
			file_put_contents($this->_file, $build_content);

			//compress
			if($compress)
				shell_exec("java -jar /Users/cccaldas/Bash/lib/yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar -o ".$this->_file." ".$this->_file);
			
		}
		
		public function addFilesBySearch($folder, $search) {
			$cmd = " cd ${folder};
			find . -type f -name ".$search;
			
			$files = shell_exec($cmd);
			$files = str_replace("./", $folder, $files);
			$files = explode("\n", $files);
			
			foreach ($files as $key => $file)
				if($file != "")
					$this->addFile($file);
			
			//echo $files;
			//var_dump($files);
		}
	}
	

?>
