def product_sum(array, multiplier = 1):
	sum = 0
	print('this is multiplier', multiplier)
	for ele in array:
		if isinstance(ele, list):
			print('this is ele', ele)		
			print('this is multiplier in if', multiplier)
			sum += product_sum(ele, multiplier+1)
		else:
			sum += ele
			print('in the else', ele, sum, multiplier)
	return sum * multiplier




array = [5,2,[7,-1],3,[6,[-13,8],4]] # 12
print(product_sum(array))