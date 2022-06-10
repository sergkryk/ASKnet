SELECT
   sum(if(date_format(start, '%Y-%m-%d')=curdate(), sent + 4294967296 * acct_output_gigawords, 0)),
   sum(if(date_format(start, '%Y-%m-%d')=curdate(), recv + 4294967296 * acct_input_gigawords, 0)),
   SEC_TO_TIME(sum(if(date_format(start, '%Y-%m-%d')=curdate(), duration, 0))),

   sum(if(TO_DAYS(curdate()) - TO_DAYS(start) = 1, sent + 4294967296 * acct_output_gigawords, 0)),
   sum(if(TO_DAYS(curdate()) - TO_DAYS(start) = 1, recv + 4294967296 * acct_input_gigawords, 0)),
   SEC_TO_TIME(sum(if(TO_DAYS(curdate()) - TO_DAYS(start) = 1, duration, 0))),

   sum(if((YEAR(curdate())=YEAR(start)) and (WEEK(curdate()) = WEEK(start)), sent + 4294967296 * acct_output_gigawords, 0)),
   sum(if((YEAR(curdate())=YEAR(start)) and  WEEK(curdate()) = WEEK(start), recv + 4294967296 * acct_input_gigawords, 0)),
   SEC_TO_TIME(sum(if((YEAR(curdate())=YEAR(start)) and WEEK(curdate()) = WEEK(start), duration, 0))),

   sum(if(date_format(start, '%Y-%m')=date_format(curdate(), '%Y-%m'), sent + 4294967296 * acct_output_gigawords, 0)),
   sum(if(date_format(start, '%Y-%m')=date_format(curdate(), '%Y-%m'), recv + 4294967296 * acct_input_gigawords, 0)),
   SEC_TO_TIME(sum(if(date_format(start, '%Y-%m')=date_format(curdate(), '%Y-%m'), duration, 0))),

   sum(sent + 4294967296 * acct_output_gigawords),
   sum(recv + 4294967296 * acct_input_gigawords),
   SEC_TO_TIME(sum(duration))
   FROM dv_log WHERE uid='819' |    0