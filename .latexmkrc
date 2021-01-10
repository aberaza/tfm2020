
$do_cd = 1; #temporary fix for makeindex in multifle

@default_files = ('tfm.tex');

@pdflatex = 'pdflatex -interaction=nonstopmode -file-line-error -shell-escape';
#@pdflatex = 'pdflatex -halt-on-error -file-line-error -shell-escape';
